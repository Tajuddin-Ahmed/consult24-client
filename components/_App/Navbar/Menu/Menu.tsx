import Link from "../../../../utils/ActiveLink";
import React from "react";
import { menuItems } from "../../../../utils/menu-items";
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <>
      <ul className="navbar-nav">
        {menuItems.map((item) => {
          return (
            <li className="nav-item">
              <a href="#" className="dropdown-toggle nav-link">
                {item.name}
              </a>
              <ul className="dropdown-menu">
                {item.subMenu.map((sumItem) => {
                  return (
                    <li className="nav-item">
                      <Link href="/" activeClassName="active-not">
                        <a className="nav-link">{sumItem.name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}
