import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  layoutContainer: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(2),
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    position: "relative"
  },
  pageTitle: {
    fontSize: "20px"
  }
}));
