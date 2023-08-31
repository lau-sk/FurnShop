import { Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { colors, sizes } from '../../constants/index';


const Carousel = () => {
    const images = [
        'https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/119201/full/Casa-Padrino-Luxus-Barock-Schlafzimmer-Set-Gold---Weiss---Braun---Gold-1-Doppelbett-mit-Kopfteil-und-2-Nachtkommoden-Schlafzimmer-Moebel-im-Barockstil-Edel-und-Prunkvoll-119201_7.JPG',
        'https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/121711/full/Casa-Padrino-Luxus-Barock-Schlafzimmer-Set-Grau---Kupfer---Silber-1-Doppelbett-mit-Kopfteil-und-2-Nachtkommoden-Barock-Schlafzimmer-Moebel-Luxus-Moebel-im-Barockstil-Edel-und-Prunkvoll_4.JPG',
        'https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/121715/preview/Casa-Padrino-Luxus-Barock-Schlafzimmer-Set-Weiss---Beige---Braun---Gold-1-Barock-Doppelbett-mit-Kopfteil-und-2-Barock-Nachtkommoden-Luxus-Schlafzimmer-Moebel-im-Barockstil-Barock-Moebe_4.JPG',
    ];

    return (
        <View>
            <SliderBox
                images={images}
                dotColor={colors.primary}
                inactiveDotColor={colors.secondary}
                ImageComponentStyle={{ borderRadius: 15, width: '95%', marginTop: 15 }}
                autoplay
                circleLoop
            />
        </View>
    )
};

export default Carousel;
