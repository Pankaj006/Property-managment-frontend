
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faList, faRocket, faTimes, faCircle, faChevronDown, faCog, faKey, faCheck, faMeh, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './css/chatBox.css'

export default function ChatBox({ showModal, toggleModal, modalAnimation }) {
    return (
        showModal && (
            <div
                className={`modal show ${modalAnimation}`}
                tabIndex="-1"
                role="dialog"
                style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={toggleModal}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="container bootstrap snippets bootdey.com">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* start:chat room */}
                                        <div className="box">
                                            <div className="chat-room">
                                                {/* start:aside kiri chat room */}
                                                <aside className="kiri-side">
                                                    <div className="user-head">
                                                        <h3>Message</h3>
                                                    </div>

                                                    <ul className="chat-list chat-user">
                                                        <li>
                                                            <a href="##">
                                                                <FontAwesomeIcon icon={faCircle} className="text-success" />
                                                                <span>Jonathan Smith</span>
                                                                <FontAwesomeIcon icon={faTimes} className="pull-right" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="##">
                                                                <FontAwesomeIcon icon={faCircle} className="text-success" />
                                                                <span>Jhon Doe</span>
                                                                <FontAwesomeIcon icon={faTimes} className="pull-right" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="##">
                                                                <FontAwesomeIcon icon={faCircle} className="text-muted" />
                                                                <span>Cendy Andrianto</span>
                                                                <FontAwesomeIcon icon={faTimes} className="pull-right" />
                                                             </a>
                                                        </li>
                                                        <li>
                                                            <a href="##">
                                                                <FontAwesomeIcon icon={faCircle} className="text-danger" />
                                                                <span>Anjelina Joe</span>
                                                                <FontAwesomeIcon icon={faTimes} className="pull-right" />
                                                            </a>
                                                        </li>
                                                    </ul>

                                                </aside>
                                                {/* end:aside kiri chat room */}
                                                {/* start:aside tengah chat room */}
                                                <aside className="tengah-side">
                                                    <div className="chat-room-head">
                                                        <h3>Pankaj</h3>

                                                    </div>
                                                    <div className="group-rom">
                                                        <div className="first-part odd">Jonathan Smith</div>
                                                        <div className="second-part">Hello Cendy are you there?</div>
                                                        <div className="third-part">12:30</div>
                                                    </div>
                                                    <div className="group-rom">
                                                        <div className="first-part">Cendy Andrianto</div>
                                                        <div className="second-part">Yoman Smith. Please proceed</div>
                                                        <div className="third-part">12:31</div>
                                                    </div>
                                                    <div className="group-rom">
                                                        <div className="first-part odd">Jonathan Smith</div>
                                                        <div className="second-part">
                                                            I want to share a file using chatroom
                                                        </div>
                                                        <div className="third-part">12:32</div>
                                                    </div>
                                                    <div className="group-rom">
                                                        <div className="first-part">Cendy Andrianto</div>
                                                        <div className="second-part">oh sure. please send</div>
                                                        <div className="third-part">12:32</div>
                                                    </div>

                                                    <div className="group-rom">
                                                        <div className="first-part">Cendy Andrianto</div>
                                                        <div className="second-part">Fantastic job, love it :)</div>
                                                        <div className="third-part">12:32</div>
                                                    </div>
                                                    <div className="group-rom">
                                                        <div className="first-part odd">Jonathan Smith</div>
                                                        <div className="second-part">Thanks</div>
                                                        <div className="third-part">12:33</div>
                                                    </div>
                                                    <footer>
                                                        <div className="chat-txt">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <div className="btn-group">
                                                            <button
                                                                type="button"
                                                                className="btn btn-white"
                                                                data-original-title=""
                                                                title=""
                                                            >
                                                                <FontAwesomeIcon icon={faMeh} />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-white"
                                                                data-original-title=""
                                                                title=""
                                                            >
                                                                <FontAwesomeIcon icon={faPaperclip} />
                                                            </button>
                                                        </div>
                                                        <button
                                                            className="btn btn-danger"
                                                            data-original-title=""
                                                            title=""
                                                        >
                                                            Send
                                                        </button>
                                                    </footer>
                                                </aside>
                                                {/* end:aside tengah chat room */}
                                                {/* start:aside kanan chat room */}
                                                <aside className="kanan-side">
                                                    <div className="user-head">
                                                        <h3>Property</h3>

                                                    </div>
                                                    <div className="invite-row">
                                                        <h4 className="pull-left">People</h4>
                                                    </div>
                                                    <ul className="chat-available-user">

                                                        <li>
                                                            <a href="#chat-room.html">
                                                                <FontAwesomeIcon icon={faCircle} className="text-success" />
                                                                Cendy Andrianto
                                                                <span className="text-muted">2h:32m</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#chat-room.html">
                                                                <FontAwesomeIcon icon={faCircle} className="text-danger" />
                                                                Surya Nug
                                                                <span className="text-muted">3h:22m</span>
                                                            </a>
                                                        </li>

                                                    </ul>

                                                </aside>
                                            </div>
                                        </div>
                                        {/* end:chat room */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    );
}
