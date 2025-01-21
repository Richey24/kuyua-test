import Header from "@/components/Homepage/Header";
import styles from "./page.module.css";
import AllLocationBox from "@/components/Homepage/AllLocationBox";
import RiskStat from "@/components/Homepage/RiskStat";
import Buttons from "@/components/Homepage/Buttons";
import Explore from "@/components/Homepage/Explore";
import Profile from "@/components/Homepage/Profile";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.firstBox}>
        <AllLocationBox />
        <RiskStat />
        <Buttons />
      </div>
      <div className={styles.secondBox}>
        <Explore />
        <Profile />
      </div>
    </div>
  );
}
