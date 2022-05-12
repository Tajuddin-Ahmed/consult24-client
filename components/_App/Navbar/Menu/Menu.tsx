import Link from "../../../../utils/ActiveLink";
import React from "react";
import { menuItems } from "../../../../utils/menu-items";
import classes from "../../Navbar/Menu.module.css";
export default function Menu() {
  const handleMouseClick = (id) => {
    document.getElementById(id).classList.toggle("d-inline");
  };

  return (
    <>
      {menuItems.map((item) => {
        return (
          <div key={item.id} className={classes.dropdown}>
            <a className={classes.dropbtn}>{item.name}</a>

            <div className={classes.dropdownContent}>
              {item.subMenu.map((subItem) => {
                return (
                  <Link
                    href={{
                      pathname: "/search/searchByItem",
                      query: { item: subItem.name },
                    }}
                  >
                    <a key={subItem.id}>{subItem.name}</a>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
