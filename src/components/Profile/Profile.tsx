import React from 'react';
import styles from './profile.module.css';

interface ProfileProps {
  imageUrl: string;
  userProfile: string;
  hide: boolean
}

const Profile: React.FC<ProfileProps> = ({ imageUrl, userProfile, hide }) => {
  return (
    <div className={styles.profile}>
      <img src={imageUrl} className={styles.imgprofile} alt="Image Profile" />
      <p className={hide ? styles.none : styles.nameprofile}>Tarefas de {userProfile}</p>
    </div>
  );
};

export default Profile;
