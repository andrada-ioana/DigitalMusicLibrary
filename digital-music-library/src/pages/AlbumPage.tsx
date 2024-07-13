import AlbumDescription from "../components/AlbumDescription";
import CustomButton from "../components/CustomButton";
import { IoIosArrowRoundBack } from "react-icons/io";
import SongsList from "../components/SongsList";
import "./AlbumPage.css";

const AlbumPage: React.FC = () => {
  return (
    <div>
      <CustomButton
        iconFront={<IoIosArrowRoundBack size="30" />}
        onClick={() => console.log("Button clicked")}
        className="custom-button"
        label=""
      />
      <div className="album-content">
        <div className="album">
          <AlbumDescription
            title="1989"
            artist="Taylor Swift"
            description="1989 is the fifth studio album by American singer-songwriter Taylor Swift, released on October 27, 2014, through Big Machine Records. Following the release of her genre-spanning fourth studio album Red (2012), noted for pop hooks and electronic production, the media questioned the validity of Swift's status as a country artist."
          />
        </div>
        <SongsList
          songs={[
            {
              id: "1",
              title: "Welcome to New York",
              length: "3:32",
              isFavourite: false,
            },
            {
              id: "2",
              title: "Blank Space",
              length: "3:51",
              isFavourite: false,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AlbumPage;
