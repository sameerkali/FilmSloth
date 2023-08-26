import { makeStyles } from "@mui/styles";
export default makeStyles(()=>({
    root: {
        display:'flex',
        height:'100%',
        maxWidth: "100%",
        overflowX: "hidden",
    },
    toolbar: {
        height:'70px'
    },
    content: {
        flexGrow: '1',
        padding: '2em',
    }
}))