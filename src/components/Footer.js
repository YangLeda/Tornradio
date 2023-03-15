import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        1. Battle stats estimating algorithm is from <a href="https://www.torn.com/forums.php#/p=threads&f=61&t=16065473">here</a>. I believe this is also used by TornTools.
      </p>
      <p>2. Official Torn API updates data every 15-30 seconds, so data shown here has some delay from the actual status.</p>
      <p>3. Spy data is fetched from a seperate manually eddited Google Sheet.</p>
      <p>
        4. 冰蛙 estimating algorithm is from SMTH 冰蛙宝鉴 bingri[1523812] kaeru[1769499] htys[1545351] mirrorhye[2564936] tobytorn[1617955] Microdust[2587304].
      </p>
      <p>TornRadio by tornradio [2851045]</p>
    </footer>
  );
};

export default Footer;
