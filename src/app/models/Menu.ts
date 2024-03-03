import mongoose from "mongoose";
import { Schema } from "mongoose";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseStorage } from "../lib/firebase";
import { dataURLtoBlob } from "../helpers";

const menuSchema = new Schema({
    owner: {
        type: String,       // Owner's email
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    templateId: {
        type: Number,
        default: 1
    },
    sellerInfo: {
        name: String,
        address: String,
        email: String,
        phone: String,
        website: String,
        short_description: String
    },
    menuItems: [
        {
            id: Number,
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            description: String,
            image: String
        }
    ]
}, {
    methods: {
        repr() {
            return `${this.sellerInfo &&  this.sellerInfo.name ? this.sellerInfo.name : 'Your menu'}`;
        },
        async uploadImages() {
            // Upload images to Firebase Storage if it's not already uploaded
            for (let index = 0; index < this.menuItems.length; index++) {
                const item = this.menuItems[index];
                if (item.image && item.image.startsWith('data:image/')) {
                    // Replace the image data with the URL
                    const imageBlob = dataURLtoBlob(item.image);
                    const storageRef = ref(firebaseStorage, `${this.owner}/menus/${this._id}/item-${item.id}`);
                    const snapshot = await uploadBytes(storageRef, imageBlob);
                    const downloadURL = await getDownloadURL(snapshot.ref);
                    this.menuItems[index].image = downloadURL;
                }
            }
        }
    }
});

export const Menu = mongoose.models.Menu || mongoose.model('Menu', menuSchema);