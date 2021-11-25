import styled from "styled-components";
import Background from '../assets/background.png';

export const Container = styled.div`
    background-color: #1F1F1D;
    display: flex;
    height: 900px;
    width: 100vw;
`
export const ContainerPrincipal = styled.div`
    margin: 120px auto;
    width:355px;
    height: 500px;
    background: url(${Background});
    border-radius: 14px;
    box-shadow: 2px 2px #1F1F1D,
              3px 3px #FFCC00,
              4px 4px #FFCC00,
              5px 5px #FFCC00,
              6px 6px #FFCC00,
              7px 7px #FFCC00,
              8px 8px #FFCC00,
              9px 9px #FFCC00;
`
export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 160px;
`
export const Image = styled.img`
    width: 80px;
    border-radius: 50%;
    margin: 15px 0;
`
export const H1 = styled.h1`
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
`
export const ContainerSecondary = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 155px;
    margin-top: 40px;
`
export const ContainerSocialNetwork = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    p{
        font-size: 16px;
        margin-bottom: 30px;
        font-weight: 500;
    }
`
export const CardWhatsapp = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #075E54 0%, #026B23 100%) ;
    .logo-whatsapp{
        color: white;
        margin: 5px;
        }
`
export const CardTelephone = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #0166E2 0%, #16A6FB  100%) ;
    .logo-telephone{
        color: white;
        margin: 5px;
        }
`
export const CardEmail = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #7A10AC 0%, #D121FD 100%) ;
    .logo-email{
        color: white;
        margin: 5px;
        }
`
export const ContainerServices = styled.div`
    li{
        list-style: none;
        margin-bottom: 15px;
        font-weight: 500;
    }
`
export const H2 = styled.h2`
    font-size: 15px;
    margin-bottom: 25px;
    font-weight: 700;
`
export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 160px;
    p{
        font-size: 15px;
        text-transform: uppercase;
        margin: 0 10px;
        font-weight: 700;
    }
`