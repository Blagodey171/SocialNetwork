import React, { useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';

let СontainerProfilePersonData = (props) => {
    let [mode, setMode] = useState(false);
    const { handleSubmit, errors, register} = useForm({mode: 'onBlur'});
    const inputMaxLength = 10;

    let activateMode = () => {
        setMode(mode = !mode)
    }
    
    const onSubmit = (value) => {
        activateMode()
        props.putProfileStatusThunkCreator(value.statusInput)
    }

    // componentDidMount = () => {}
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }
    // state = {
    //     mode: false,
    //     status: this.props.status
    // }
    
    // deactivateMode = () => {
    //     
    // }

    // onChangeStatus = (e) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     })
    // }

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

                            
                            <form className="profile-info__form" onBlur={handleSubmit(onSubmit)}>
                                {
                                    mode
                                    ? <input name={'statusInput'} placeholder='new post' ref={register({required: false, maxLength: {value: inputMaxLength}})} defaultValue={props.status} autoFocus className='profile-info__message' type="text" />
                                    : <p className='profile-info__p' onClick={activateMode}>{props.status}</p>
                                }
                                {errors.statusInput?.type === 'required' && 'Your input is required'}
                                {errors.statusInput?.type === 'maxLength' && `Your input max length is ${inputMaxLength}`}
                            </form>
                            

                            {/* {
                                this.state.mode
                                ?   <form className="profile-info__form">
                                        <input autoFocus onChange={this.onChangeStatus} onBlur={this.deactivateMode} className='profile-info__message' type="text" value={this.state.status} />
                                    </form>
                                :   <span className='profile-info__span' onClick={this.activateMode} >{this.props.status}</span>
                            } */}
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


export default СontainerProfilePersonData
// let mapStateToProps = (state) => {
//     return {
//         ...state.profileReducer
//     }
// }
// export default compose(
//     connect(mapStateToProps, {
//         putProfileStatusThunkCreator,

//     }),
//     withRouter,
// )(containerProfilePersonData); 