import styles from "./profile.module.css";

const Profile = ({ hide }: { hide: boolean }) => {
  const username = localStorage.getItem("username");
  const imageUrl = localStorage.getItem("profile_image");

  return (
    <div className={styles.profile}>
      <img
        src={
          imageUrl
            ? imageUrl
            : "https://img.freepik.com/vetores-gratis/modelo-humano-sem-rosto-realista-3d_1441-2189.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais"
        }
        className={styles.imgprofile}
        alt="profile user"
      />
      <p className={hide ? styles.none : styles.nameprofile}>
        Tarefas de {username ? username : "Usuário sem nome"}
      </p>
    </div>
  );
};

export default Profile;
