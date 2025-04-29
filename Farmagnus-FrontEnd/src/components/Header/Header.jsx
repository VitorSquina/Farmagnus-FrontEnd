// Style
import styles from "./Header.module.css";
// React
import { NavLink } from "react-router-dom";
import { useState } from "react";
// Context
import { useAuth } from "../../contexts/AuthProvider";
// React-Icons
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuLockKeyhole } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";

export const Header = ({ logo }) => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const handleToogle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/dashboard" className={styles.logo}>
            {logo ? (
              <img src={logo} alt="Logo" className={styles.logoImg} />
            ) : (
              <h1 className={styles.logoText}>Pharma Manager</h1>
            )}
          </NavLink>
        </div>
        <div className={styles.profile}>
          <div className={styles.notifyIconContainer}>
            <IoIosNotificationsOutline />
          </div>
          <div className={styles.profileImgContainer}>
            <button className={styles.profileImg} onClick={handleToogle}>
              FM
            </button>
            {isOpen && (
              <div className={styles.profileSlider}>
                <div className={styles.profileSliderContent}>
                  <NavLink
                    to="/alterar-senha"
                    className={styles.changePassword}
                  >
                    <LuLockKeyhole className={styles.icon} />
                    Alterar Senha
                  </NavLink>

                  <button className={styles.logout} onClick={logout}>
                    <FiLogOut className={styles.icon} />
                    Sair
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
