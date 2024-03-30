import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import FormInput from "../../components/formInput/FormInput";
import "./modalForm.css";

const ModalForm = ({ productInfo, handleChildClick, handleCloseForm }) => {
  const { productDiscount, productImg, productPara, productTitle } =
    productInfo;
  return (
    <div className="modalForm_Gen">
      <div onClick={handleCloseForm} className="select-modal-body">
        <div onClick={handleChildClick} className="select-modalBody-cont">
          <div className="cancel_formModal" onClick={handleCloseForm}>
            <FaTimesCircle />
          </div>
          <div className="modal_GenBod">
            <span className="modal_productTitle">{productTitle}</span>
          </div>

          <div className="modal_productDescParent">
            <div className="modal_productDescParent_img">
              <img src={productImg} />
            </div>

            <div className="modal_productDescParent__descrip">
              {productPara}
            </div>
          </div>

          <div className="modalForm_Flex">
            <div className="modalForm_flexOneGen">
              <div className="flexOne_formHeader">Do you need more info?</div>
              <div className="flexOne_formParagraph">
                Request your product, send us your questions, ask us for more
                information... We offer you a quick and personalized response to
                all your demands.
              </div>
              <div className="flexOne_formParaSub">
                If you wish you can also call us:
              </div>
              <div className="flexOne_formParaSubTel">
                Tel. +234 916 870 6000
              </div>
            </div>
            <div className="modalForm_flexTwoGen">
              <div className="form_genHeading">
                Fill the form to complete your order
              </div>
              <div className="form_GenFam">
                <FormInput productTitle={productTitle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
