import React from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './Editor.css'

const Editor = ({ value, onChange }) => {
	const fontSizeArr = [
		'8px',
		'9px',
		'10px',
		'12px',
		'14px',
		'16px',
		'20px',
		'24px',
		'32px',
		'42px',
		'54px',
		'68px',
		'84px',
		'98px',
	]

	const Size = Quill.import('attributors/style/size')
	Size.whitelist = fontSizeArr
	Quill.register(Size, true)

	const toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'],
		['blockquote', 'code-block'],
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ script: 'sub' }, { script: 'super' }],
		[{ indent: '-1' }, { indent: '+1' }],
		[{ direction: 'rtl' }],
		[{ size: fontSizeArr }],
		[{ color: [] }, { background: [] }],
	]
	return (
		<ReactQuill
			value={value}
			onChange={onChange}
			modules={{
				toolbar: toolbarOptions,
			}}
		/>
	)
}

export default Editor
