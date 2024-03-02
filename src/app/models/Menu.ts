import mongoose from "mongoose";
import { Schema } from "mongoose";

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
        }
    }
});

export const Menu = mongoose.models.Menu || mongoose.model('Menu', menuSchema);