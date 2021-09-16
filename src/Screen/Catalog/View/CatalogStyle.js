import {StyleSheet} from "react-native";

export default StyleSheet.create({

      /* Logo style */
      textLogo: {
        fontSize: 18,
        fontWeight: 'bold',
      },

      /* Column grid */
      columnGrid: {
        flexDirection: 'column',
        margin: 10,
      },

      /* Catalog grid */
      catalogContainer: {
        flexDirection: 'column',
        flex: 1,
      },
      menuBox: {
        backgroundColor: '#FAD8A8',
      },
      imageBox: {
        flex: 3,
      },
      infoBox: {
        flex: 2,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white'
      },
      catalogBox: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
      },

      // Item containt size
      itemContent: {
        width: 150,
        height: 195,
        margin: 10,
        
      },

      // Catalog Item image size
      imageSize: {
        width: 150,
        height: 150,
        borderRadius: 5,

      },

      // Catalog item name
      itemName: {
        fontSize: 18,
        fontWeight: 'bold',
      },

      /* Partner logo image */
      partnerLogo: {
        borderRadius: 100,
        width: 80,
        height: 80,
      },

      /* Partner company name */
      partnerName: {
        fontSize: 16,
        fontWeight: 'bold',
      },

      /* Partner calendar */
      openCalendar: {
        fontSize: 14,
      },

      /* Partner Description */
      description: {
        fontSize: 14,
        margin: 10,
      },

      /* Search bar style */
      info: {
        alignItems: "center"
      },
      textInfo: {
        fontSize: 50,
        textAlign: 'center',
      },
      viewButton: {
        backgroundColor: '#ff000040',
        alignItems: "center",
        justifyContent: "center",
      },
      inputSearchBarStyle: {
        backgroundColor: 'white',
        height:20,
      },

      // Exemple


      safeAreaView:{
        flexGrow: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
      },

})