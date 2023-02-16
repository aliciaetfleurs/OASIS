const modalOpenBid = document.getElementsByClassName('bidButton')[0];
const modalOpenSuccess = document.getElementsByClassName('successButton')[0];
const modalBid = document.getElementsByClassName('bidModalArea')[0];
const modalSuccess = document.getElementsByClassName('successModalArea')[0];
const modalCloseBid = document.getElementsByClassName('bidModalBg')[0];
const modalSuccessCloseBid = document.getElementsByClassName('successButton')[0];
const modalCloseSuccess = document.getElementsByClassName('bidModalBg')[1];
const modalOpenBidConfirm = document.getElementsByClassName('bidConfirmBtn')[0];

modalOpenBid.addEventListener('click', () => {
    modalBid.style.top ='0px';
    modalBid.style.display ='flex';
});
modalOpenSuccess.addEventListener('click', () => {
    modalSuccess.style.top ='0px';
    modalCloseSuccess.style.display = 'block';
});
modalCloseBid.addEventListener('click', () => {
    modalBid.style.top ='100vh';
});
modalSuccessCloseBid.addEventListener('click', () => {
    modalBid.style.top ='100vh';
});
modalCloseSuccess.addEventListener('click', () => {
    modalSuccess.style.top = '-130px';
    modalCloseSuccess.style.display = 'none';
});