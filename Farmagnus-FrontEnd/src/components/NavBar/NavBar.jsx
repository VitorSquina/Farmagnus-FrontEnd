//Styles
import styles from './NavBar.module.css';
//React
import React from 'react';
//React-Router-Dom
import { NavLink } from 'react-router-dom';
//Context
import { useAuth } from '../../contexts/Auth/useAuth';
//React-Icons
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsBoxSeam } from 'react-icons/bs';
import { FiSmartphone } from 'react-icons/fi';
import { FaRegClock } from 'react-icons/fa6';
import { PiClockCounterClockwiseBold } from 'react-icons/pi';
import { FiLogOut } from 'react-icons/fi';

export const NavBar = () => {
  const { logout } = useAuth();

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <NavLink className={styles.navItem} to={'/dashboard'}>
          <LuLayoutDashboard size={20} />
          <p>Dashboard</p>
        </NavLink>
        <NavLink className={styles.navItem} to={'/pedidos'}>
          <BsBoxSeam size={20} />
          <p>Pedidos</p>
        </NavLink>
        <NavLink className={styles.navItem} to={'/catalogo'}>
          <FiSmartphone size={20} />
          <p>Catálogo</p>
        </NavLink>
        <NavLink className={styles.navItem} to={'/entregas'}>
          <FaRegClock size={20} />
          <p>Horários</p>
        </NavLink>
        <NavLink className={styles.navItem} to={'/historico'}>
          <PiClockCounterClockwiseBold size={20} />
          <p>Histórico</p>
        </NavLink>
      </ul>
      <div className={styles.logoutContainer}>
        <button className={styles.logout} onClick={logout}>
          <FiLogOut className={styles.icon} />
          Sair
        </button>
      </div>
    </nav>
  );
};
