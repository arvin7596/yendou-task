import { alertAnatomy } from "@chakra-ui/anatomy";
import { extendTheme, createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const customSuccess = definePartsStyle({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "12px 20px 12px 16px",
    gap: "8px",
    background: `radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 
      200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F`,
    boxShadow: `0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px 
      rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 
      8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 
      0.06)`,
    borderRadius: "8px",
    border: "1px solid",
    borderImageSource:
      "linear-gradient(0deg, #6F7076, #6F7076), radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%)",
    borderImageSlice: 1,
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#FFFFFF",
  },
  description: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#FFFFFF",
  },
  icon: {
    width: "24px",
    height: "24px",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    color: "#74C898",
    border: "3px solid #74C898",
    borderRadius: "50%",
    fontStyle: "bold",
  },
});

const toastTheme = defineMultiStyleConfig({
  variants: { customSuccess },
});

export const theme = extendTheme({
  components: {
    Alert: toastTheme,
  },
});
