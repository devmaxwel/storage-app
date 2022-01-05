import { getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import React, { useState } from 'react'
import { storage } from './firebaseConfig';

const UploadImage = () => {

    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState("");

    const handleUpload =(e)=> {
         e.preventDefault();
         const file = e.target[0].files[0];
         uploadFile(file);
       
    }

    const uploadFile = (file) => {
        if(!file){
            return;

        }else{
            const storageRef = ref(storage, `files/${file.name}`);

            const uploadImage = uploadBytesResumable(storageRef, file);

            // uploadImage will have an event
            uploadImage.on("state_changed", (snapshot) => {
                const uploadProgress = Math.round( (snapshot.bytesTransferred/snapshot.totalBytes)*100);
                setProgress(uploadProgress);
            }, (err) => {
                console.log(err);
            }, () => {

                getDownloadURL(uploadImage.snapshot.ref).then( (url) => {
                    setImage(url);
                } );
            });
            
        }


    }

    return (
        <div>
            <form onSubmit={handleUpload}>
                <input type='file' className='input'  />
                <button type='submit'>Upload</button>

            </form>
            <h2>{progress}</h2>
              <hr />
            

            <img src={image} alt='/' />

           
         
            
        </div>
    )
}

export default UploadImage;
