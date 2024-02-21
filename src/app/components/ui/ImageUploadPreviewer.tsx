"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageUploadPreviewer({content, onChange, onClick, label}) {
    const [imageFile, setImageFile] = useState<File>();
    const [imagePreview, setImagePreview] = useState<string>(content);

    useEffect(() => {
        let fileReader: any = false;
        if (imageFile) {
            fileReader = new FileReader();
            fileReader.onload = (e: any) => {
                const { result } = e.target;
                if (result) {
                    setImagePreview(result);
                    onChange(result);
                }
            }
            fileReader.readAsDataURL(imageFile);
        }

        return () => {
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }
    }, [imageFile]);

    const uploadImage = (e: any) => {
        setImageFile(e.target.files[0])
    }

    return (
        <div>
            <Image 
                src={imagePreview} 
                alt={label} 
                width={200} 
                height={200} 
                className="w-[200px] h-[200px] rounded-md object-cover mx-auto"/>
            <input className="block mt-3 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
                accept="image/*"
                onChange={e => {uploadImage(e)}}
                onClick={onClick}
            />
        </div>
    )
}