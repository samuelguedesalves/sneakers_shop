import { useEffect, useState } from "react";
import { Media } from "../../types/Product";
import { Container, ImageButton } from "./styles";

interface Props {
  medias: Media[];
}

export const ProductSlider: React.FC<Props> = ({ medias }) => {
  const [currentMedia, setCurrentMedia] = useState<{
    index: number;
    media: Media;
  } | null>(null);

  useEffect(() => {
    setCurrentMedia({ index: 0, media: medias[0] });
  }, []);

  function handleChangeImage(media: Media, index: number) {
    setCurrentMedia({ index, media });
  }

  return (
    <Container>
      {currentMedia && (
        <>
          <img
            className="principal-image"
            src={currentMedia.media.image.url}
            alt={currentMedia.media.image.alt}
          />

          <div className="images-list">
            {medias.map((media, index) => {
              return (
                <ImageButton
                  key={index}
                  css={{
                    border:
                      index == currentMedia.index
                        ? "solid 2px $blue"
                        : "transparent",
                  }}
                  onClick={() => handleChangeImage(media, index)}
                >
                  {index == currentMedia.index && (
                    <div className="image-overlayer"></div>
                  )}
                  <img src={media.thumbnail.url} alt={media.thumbnail.alt} />
                </ImageButton>
              );
            })}
          </div>
        </>
      )}
    </Container>
  );
};
