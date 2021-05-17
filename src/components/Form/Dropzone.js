//@flow
import * as React from 'react';
import { UploadIcon } from '../Icons';

type Props = {
	values: Object,
	errors: Object,
	setFieldValue: (string, any) => void,
	name: string,
	label: string
}
function Dropzone({values, setFieldValue, setFieldTouched, touched, errors, name, label}: Props) {
	const [selectedImage, setImage] = React.useState(null);
	const error = errors[name] && touched[name];
	
	React.useEffect(() => {
		if (values[name]){
			renderImage(values[name])
		}
	}, []);
	
	const renderImage = (file) => {
		let reader = new FileReader();
		if (file && file.size / 1024 / 1024 < 5 /*here is 5MB*/){
			reader.onloadend = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
		}else {
			setImage(null);
		}
	};
	
	return (
		<div className={`field file-upload ${error ? 'uploading-error' : ''} ${values[name] !== '' && selectedImage ? 'uploaded' : ''}`}>
			<label htmlFor={name} className="input-label">{label}</label>
			<span className="deselect" onClick={() => {
				setImage(null);
				return setFieldValue(name, null);
			}} style={{backgroundImage: `url(${require('../../assets/img/common/icon-deselect.svg')})`}}/>
			<div className="file-input">
				<input
					className={error ? 'error' : ''}
					name={name}
					type="file"
					accept="image/*"
					id={name}
					onChange={(e) => {
						let file = e.currentTarget.files[0];
						setFieldTouched(name, true);
						setFieldValue(name, e.currentTarget.files[0]);
						renderImage(file);
					}}/>
				{selectedImage ? <img src={selectedImage} alt="selectedImage"/> : (
					<React.Fragment><UploadIcon/> Drag and drop a photo here</React.Fragment>
				)}
			</div>
			{error && <div className="error-message">{errors[name]}</div>}
		</div>
	)
}

export default Dropzone;