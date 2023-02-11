import { useHistory } from "react-router-dom";

export const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button className="back-button" onClick={() => history.goBack()}>Retrun</button>
        </>
    );
};