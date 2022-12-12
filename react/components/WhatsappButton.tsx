import React from "react"
import PropTypes from "prop-types"
import { useCssHandles } from 'vtex.css-handles'

type Props ={
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
  const formattedMessage = message.replace(/ /g, "%20");
  const CSS_HANDLES = ["button__container", "image"]
  const handles = useCssHandles(CSS_HANDLES)

  return <>
    <div className="fixed bottom-2 right-2 flex flexColumn">
      <div className={handles.button__container}>
        <a
          href= {`https://wa.me/${phone}?text=${formattedMessage}`}
          target= "_blank"
          rel="noreferrer noopener"
        >
          <img
            className={handles.image}
            src={logo}
            width={width}
            height={height}
            alt="Logo de WhatsApp"
          />
        </a>
      </div>
    </div>
  </>
}
WhatsappButton.propTypes = {
  logo : PropTypes.string.isRequired,
  phone : PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}
WhatsappButton.defaultProps = {
  logo: "mi-logo.png",
  phone: "3165166685",
  message: "estas comuinicandote con itg por favor ingresa tu duda",
  width: 80,
  height:80
}
WhatsappButton.schema = {
  title: "Botón de whatsaap",
  type: "object",
  properties: {
    logo: {
      title: "Logo de WhatsApp que se relacione con la marca",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Teléfono",
      decription: "agrega por favor el número de teléfono",
      type: "string"
    },
    message: {
      title: "Mensaje",
      decription: "agrega por favor el mensaje que severá para tu cliente",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    }
  }
}

export default WhatsappButton;
