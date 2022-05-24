import { Link } from "react-router-dom";

const menu = [
  {
    name: "about",
    link: "http",
  },
  {
    name: "cookie",
    link: "http",
  },
  {
    name: "preference",
    link: "http",
  },
  {
    name: "center",
    link: "http",
  },
  {
    name: "legal",
    link: "http",
  },
  {
    name: "terms",
    link: "http",
  },
  {
    name: "contact",
    link: "http",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <p className="copyright">Copyright &copy; 2022</p>
      <ul className="menu">
        {menu.map((item, idx) => {
          return (
            <li key={idx}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>

      <ul className="social">
        <li>
          <a href="https://www.facebook.com/ascap/">
            <img src="/icon_fb.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ASCAP">
            <img src="/icon_tw.svg" alt="twitter" />
          </a>
        </li>
        <li>
          <a href="https://facebook.com/ASCAP">
            <img src="/icon_ig.svg" alt="instagramm" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
