import CustomButton from "../components/CustomButton";
import { IoIosArrowRoundForward } from "react-icons/io";
import AlbumCard from "../components/AlbumCard";
import ArtistCard from "../components/ArtistCard";

const HomePage: React.FC = () => {
  return (
    <div>
      <div>
        <CustomButton
          label="Artists"
          onClick={() => console.log("Button clicked")}
          className="custom-button"
          iconBack={<IoIosArrowRoundForward size="30" />}
        />
      </div>

      <div>
        <ArtistCard name="Taylor Swift" />
      </div>

      <div>
        <CustomButton
          label="Albums"
          onClick={() => console.log("Button clicked")}
          className="custom-button"
          iconBack={<IoIosArrowRoundForward size="30" />}
        />
      </div>
      <div>
        <AlbumCard title="1989" artist="Taylor Swift" />
      </div>
    </div>
  );
};

export default HomePage;
