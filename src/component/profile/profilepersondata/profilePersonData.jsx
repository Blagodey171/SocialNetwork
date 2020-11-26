import React from 'react';


let profilePersonData = (props) => {
    return (
        <div className='profile-info' >
                <div className='profile-info__avatar' >
                    {props.profile ? <img className='profile-info__img' src={props.profile.photos.large} alt="" /> : <img className='profile-info__img' src='' alt="img" />}
                    <div className='profile-info__fullname'>
                        {
                            props.profile ? <h3> {props.profile.fullName} </h3> : null
                        }
                    </div>
                    <div className='profile-info__settings-img' ></div>
                </div>
                <div className='profile-info__person-data' >
                    <div className='profile-info__status'>
                        {
                            props.localState.mode
                            ?   <form className="profile-info__form">
                                    <input autoFocus onBlur={props.deactivateMode} className='profile-info__message' type="text" value={props.status} />
                                </form>
                            :   <span onClick={props.activateMode} >{props.status}</span>
                        }
                    </div>
                    <div className='profile-info__about-me'>
                        {
                            props.profile ? <h3>{`About me : ${props.profile.aboutMe}`}</h3> : <h3>{`нет информации`}</h3>
                        }
                    </div>
                </div>
            </div>
    )
}

export default profilePersonData;