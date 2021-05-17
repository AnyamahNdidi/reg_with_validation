import React from 'react'
import "./userstyle.css"
import EditIcon from '@material-ui/icons/Edit';
import mailimg from "./img/trophy_1f3c61.png"
import phoneimg from "./img/round-pushpin_1f4cd2.png"
import popimg from "./img/round-pushpin_1f4cd3.png"
import { Button } from 'antd';


function Userdash() {
  return (
    <div style={{
      display: "flex", justifyContent: "center"
    }}>
      <div className="user_dash">
        <div className="proinfo">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                width: "70px",
                height: "40px",
                color: "grey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >My Profile</div>
            <div
              style={{
                width: "70px",
                height: "35px",
                background: "#4285f4",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px"
              }}
            >Log Out</div>
          </div>
          <div className="nep">
            <div style={{
              width: "110px",
              height: "110px",
              background: "#4285f4",
              borderRadius: "10px"
            }} ></div>
            <div
              style={{
                width: "30px",
                height: "30px",
                background: "red",
                borderRadius: "30px",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                position: "absolute",
                top: "20px",
                right: "80px"
              }}

            ><EditIcon
                style={{
                  color: "white"
                }}
              /></div>
            <div style={{
              color: "black",
              fontSize: "20px",
              marginTop: "15px",

            }}>Anyamah Ndidi
            </div>
          </div>
          <div style={{
            display: "flex",
            paddingLeft: "10px",
            justifyContent: "space-between",
            width: "230px",
            marginTop: "10px",

          }}>
            <div

            >
              <img src={mailimg} />
            </div>
            <div style={{
              fontSize: "15px",
              display: "flex",
              paddingTop: "4px",



            }}>
              edwinAnyamah@gmail.com

            </div>

          </div>
          <div style={{
            height: "1px",
            width: "230px",
            background: "#DCDCDC",
            marginLeft: "25px",
            marginTop: "15px"

          }}>

          </div>

          <div style={{
            display: "flex",
            paddingLeft: "10px",
            justifyContent: "space-between",
            width: "135px",
            marginTop: "10px",

          }}>
            <div

            >
              <img src={phoneimg} />
            </div>
            <div style={{
              fontSize: "15px",
              display: "flex",
              paddingTop: "4px",



            }}>
              08134786386

            </div>


          </div>
          <div style={{
            height: "1px",
            width: "230px",
            background: "#DCDCDC",
            marginLeft: "25px",
            marginTop: "15px"

          }}>

          </div>

          <div style={{
            display: "flex",
            paddingLeft: "10px",
            justifyContent: "space-between",
            width: "135px",
            marginTop: "10px",

          }}>
            <div

            >
              <img src={popimg} />
            </div>
            <div style={{
              fontSize: "15px",
              display: "flex",
              paddingTop: "2px",



            }}>
              Lagos, Nigeria

            </div>

          </div>
          <div style={{
            height: "1px",
            width: "230px",
            background: "#DCDCDC",
            marginLeft: "25px",
            marginTop: "15px"

          }}>

          </div>

          <div>
            <Button type="primary" block style={{
              marginTop: "50px",
              marginBottom: "40px"
            }}

            >
              Edit Profile
    </Button>
          </div>

        </div>
        <div>

        </div>


      </div>

    </div >
  )
}

export default Userdash
