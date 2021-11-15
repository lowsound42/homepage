import styled from 'styled-components';
import { device } from '../styles/mediaQueryHelpers';
import { useState, useEffect } from 'react';
import emailCall from '../utilities/emailHandler';
import mixins from '../styles/mixins';

const EmailForm = () => {
    const [senderEmail, setSenderEmail] = useState<string>('');
    const [confirmEmail, setConfirmEmail] = useState<string>('');
    const [senderMessage, setSenderMessage] = useState<string>('');
    const [emailResponse, setEmailResponse] = useState<number>(0);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');
    const [errMessage, setErrorMessage] = useState<number>(0);
    const [messageColour, setMessageColour] = useState<string>('');

    // apply the right response message
    useEffect(() => {
        setMessageColour('redMessage');
        if (emailResponse === 200) {
            setMessageColour('greenMessage');
            setFeedbackMessage('Your email has been sent!');
        } else if (emailResponse === 500 && errMessage === 1) {
            setFeedbackMessage("Email addresses don't match");
        } else if (emailResponse === 500 && errMessage === 2) {
            setFeedbackMessage('Your message is empty');
        } else if (emailResponse === 500 && errMessage === 200) {
            setFeedbackMessage(
                'Looks like the email server is broken. Email me at o.khandxb@gmail.com'
            );
        }
    }, [emailResponse, errMessage]);

    const handleSendEmail = (
        email: string,
        confirmEmail: string,
        message: string
    ) => {
        setErrorMessage(0);
        var payload = {
            email: email,
            confirmEmail: confirmEmail,
            message: message
        };
        emailCall(payload).then((response) => {
            setEmailResponse(response?.emailResponse || 500);
            setErrorMessage(response?.errorMessage || 0);
        });
    };
    return (
        <FormContainer>
            <Heading>Contact Me</Heading>
            <InputContainer>
                <MarginLabel htmlFor="senderEmailAddress">
                    Your email address:
                </MarginLabel>
                <EmailHolder
                    type="email"
                    id="senderEmailAddress"
                    name="senderEmailAddress"
                    onChange={(e) => setSenderEmail(e.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <MarginLabel htmlFor="senderEmailAddress">
                    Confirm your email address:
                </MarginLabel>
                <EmailHolder
                    type="email"
                    id="senderEmailAddress"
                    name="senderEmailAddress"
                    onChange={(e) => setConfirmEmail(e.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <MarginLabel htmlFor="senderMessage">Your message:</MarginLabel>
                <MessageHolder
                    rows={5}
                    cols={33}
                    id="senderMessage"
                    name="senderMessage"
                    onChange={(e) => setSenderMessage(e.target.value)}
                />
            </InputContainer>
            <Button
                value="submit"
                onClick={() =>
                    handleSendEmail(senderEmail, confirmEmail, senderMessage)
                }
            >
                Submit
            </Button>
            {feedbackMessage === null ? (
                <Hidden> {feedbackMessage}</Hidden>
            ) : (
                <Visible>
                    <p className={messageColour}>{feedbackMessage}</p>
                </Visible>
            )}
        </FormContainer>
    );
};
export default EmailForm;

const Heading = styled.h1`
    text-align: center;
`;
const Hidden = styled.div`
    display: none;
`;
const Visible = styled.div`
    display: block;
`;

const FormContainer = styled.div`
    ${mixins.flexColumn}
    height: 100vh;
    justify-content: center;
    width: 100%;
`;

const InputContainer = styled.div`
    ${mixins.flexColumn}
    margin-bottom: 1rem;
    width: 100%;
`;

const Button = styled.button`
    height: 2rem;
    width: 10rem;
    border-radius: 20px;
`;

const MarginLabel = styled.label`
    margin-bottom: 1rem;
    width: 90%;
    @media ${device.tablet} {
        width: 70%;
    }
    @media ${device.laptop} {
        width: 60%;
    }
`;

const EmailHolder = styled.input`
    border-radius: 5px;
    height: 2rem;
    padding: 1rem 1rem;
    width: 90%;
    @media ${device.tablet} {
        width: 70%;
    }
    @media ${device.laptop} {
        width: 60%;
    }
`;
const MessageHolder = styled.textarea`
    border-radius: 5px;
    padding: 1rem 1rem;
    width: 90%;
    @media ${device.tablet} {
        width: 70%;
        height: 10rem;
    }
    @media ${device.laptop} {
        width: 60%;
        height: 20rem;
    }
`;