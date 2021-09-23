import React from 'react';
import {WithRouter} from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
    jiwon: {
        name: '장지원',
        description: 'it미디어공학과 장지원'
    },
    jin: {
        name:'서경진',
        description:'우리 엄마 이름🥰'
    }
};

const Profile = ({match}) => {
    const { username } = match.params; 
		//path에 설정한 파라미터 값에 username 정의
    const profile = data[username];
    if (!profile) {
        return (<div>❌존재하지 않는 사용자 입니다❌</div>);
    }
    return (
        <div>
            <h3>
                {username}({[profile.name]})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    );
};

export default Profile;