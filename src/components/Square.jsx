import { PropTypes } from "prop-types";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism} from "react-syntax-highlighter/dist/esm/styles/prism";

function Square({ page, title, subtitle, description, description2, content, content2, photo }) {


    return (
        <div id={page} className="square-container">
            <h2 className="square-title">{title}</h2>
            {subtitle && <h4 className="square-subtitle">{subtitle}</h4>}
            {description && <h6 className="square-description">{description}</h6>}
            <div className="square-border">
                <SyntaxHighlighter className="square-content" language="javascript" style={prism}> 
                    {content}
                </SyntaxHighlighter>
            </div>
            {description2 && <h6 className="square-description">{description2}</h6>}
            {content2 && <div className="square-border">
                <SyntaxHighlighter language="javascript" style={prism}> 
                    {content2}
                </SyntaxHighlighter>
            </div>}
            {photo && <img src={photo} />}
        </div>
    )
}

Square.propTypes = {
    page: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    description2: PropTypes.string,
    content: PropTypes.string,
    content2: PropTypes.string,
    photo: PropTypes.string,

};

export default Square
