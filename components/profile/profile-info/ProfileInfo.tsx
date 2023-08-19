'use client'
import React, {useState} from 'react'
import styles from './ProfileInfo.module.scss'
import Line from '@/components/ui/line/Line'
import {Quill} from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './ProfileInfo.css'
import ImageComponent from '@/components/ui/image/ImageComponent'
import ProfileInfoComponent from '../../ui/profile/profile-info/ProfileInfo'
import Editor from '@/components/ui/editor/Editor'
import {UserService} from '@/services/user/user.service'
import {useMutation, useQuery} from 'react-query'
import ProfileInfoModal from '@/components/ui/profile/profile-info/profile-info-modal/ProfileInfoModal'
import ImageDefault from '@/components/ui/image/ImageDefault'

const ProfileInfo = () => {
    const [isModal, setIsModal] = useState(false)
    const {data: profile, isLoading: isLoadingProfile} = useQuery(
        'profile',
        () => UserService.getProfile()
    )
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

    const [editorState, setEditorState] = useState(profile?.description)
    const [text, setText] = useState(profile?.title)

    const handleEditorChange = content => {
        setEditorState(content)
    }

    const mutation = useMutation(newInfo => UserService.setInfo(newInfo))

    const Size = Quill.import('attributors/style/size')
    Size.whitelist = fontSizeArr
    Quill.register(Size, true)

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{header: [1, 2, 3, 4, 5, 6, false]}],
        [{list: 'ordered'}, {list: 'bullet'}],
        [{script: 'sub'}, {script: 'super'}],
        [{indent: '-1'}, {indent: '+1'}],
        [{direction: 'rtl'}],
        [{size: fontSizeArr}],
        [{color: []}, {background: []}],
    ]

    return (
        <div className={styles.profile__info}>
            {isModal ? (
                <ProfileInfoModal
                    profile={profile}
                    setIsModal={setIsModal}
                    isModal={isModal}
                />
            ) : (
                ''
            )}
            {isModal ? <div className={styles.overlay}></div> : ''}
            <div className={styles.profile__info__header}>
                {profile?.avatarPath == '' ? (
                    <ImageDefault
                        borderRadius={21}
                        fz={128}
                        width={225}
                        height={225}
                        text={profile.login[0]?.toUpperCase()}
                    />
                ) : (
                    <ImageComponent
                        alt='profile'
                        borderRadius={21}
                        image={`http://localhost:7777/api/portfolio/users/${profile?.avatarPath}`}
                    />
                )}

                <ProfileInfoComponent
                    type={'settings'}
                    profile={profile}
                    setIsModal={setIsModal}
                />
            </div>
            <Line top={40} bottom={40}/>
            <div className={styles.profile__info__content}>
                <div className={styles.profile__info__content__title}>
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        type='text'
                        placeholder='Заголовок вашей страницы'
                    />
                </div>
                <div className={styles.profile__info__content__editor}>
                    <Editor onChange={handleEditorChange} value={editorState}/>
                </div>
                <Line top={40} bottom={40}/>
                <button
                    onClick={() =>
                        mutation.mutate({title: text, description: editorState})
                    }
                    className={styles.profile__info__content__save}
                >
                    Сохранить изменения
                </button>
            </div>
        </div>
    )
}

export default ProfileInfo
