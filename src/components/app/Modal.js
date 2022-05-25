
import React from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import LoginPop from './LoginPopUp';
import GameModal from './GameModal';


const ModalComponent=({open,handleClose,pageType,changeAmount})=>{

    const size=pageType==="home"?600:400

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: `${size}`,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };
    
     // const handleOpens = () => setOpen(true);
      const handleCloseModal = () => handleClose(false);

    

    return(

        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
         {pageType!=="home"? <LoginPop/>:<GameModal changeAmount={changeAmount} closeModal={handleCloseModal}/>}
          </Box>
        </Modal>
    
    )
}


export default ModalComponent;