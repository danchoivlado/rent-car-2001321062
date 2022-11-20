import "./pop-up.scss";

interface Props {
  show: boolean;
  close: () => void;
  children?: React.ReactNode;
}

const PopUp = ({ show, children, close }: Props) => {
  return show ? (
    <div className="popup" onClick={close}>
      <div onClick={(e) => e.stopPropagation()} className="popup-inner">
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PopUp;
