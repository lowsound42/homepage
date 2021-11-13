import Head from 'next/head';
import { useState, useEffect } from 'react';
import emailCall from '../utilities/emailHandler';
import styled from 'styled-components';
import { device } from '../styles/mediaQueryHelpers';
import flexColumn from '../styles/mixins';
import mixins from '../styles/mixins';

const Contact = () => {
    const [senderEmail, setSenderEmail] = useState<string>('');
    const [senderMessage, setSenderMessage] = useState<string>('');
    const [emailResponse, setEmailResponse] = useState<number>(0);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');

    // apply the right response message
    useEffect(() => {
        if (emailResponse === 200)
            setFeedbackMessage('Your email has been sent!');
        else
            setFeedbackMessage(
                'Sorry, the email server is broken! Send me a message at o.khandxb@gmail.com'
            );
    }, [emailResponse]);

    useEffect(() => {
        setFeedbackMessage('');
    }, []);

    const handleSendEmail = (email: string, message: string) => {
        var payload = {
            email: email,
            message: message
        };
        emailCall(payload).then((response) =>
            setEmailResponse(response?.status || 500)
        );
    };

    return (
        <MainContainer>
            <Head>
                <title>Contact</title>
            </Head>
            <Heading>Contact Me</Heading>
            <FormContainer>
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
                    <MarginLabel htmlFor="senderMessage">
                        Your message:
                    </MarginLabel>
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
                    onClick={() => handleSendEmail(senderEmail, senderMessage)}
                >
                    Submit
                </Button>
            </FormContainer>
            {feedbackMessage === null ? (
                <Hidden> {feedbackMessage}</Hidden>
            ) : (
                <Visible> {feedbackMessage}</Visible>
            )}
        </MainContainer>
    );
};
export default Contact;

const Heading = styled.h1`
    font-size: 2rem;
    @media ${device.laptop} {
        font-size: 3rem;
    }

    @media ${device.laptop} {
        font-size: 4rem;
    }
`;
const Hidden = styled.div`
    display: none;
`;
const Visible = styled.div`
    display: block;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormContainer = styled.div`
    ${mixins.flexColumn}
`;

const InputContainer = styled.div`
    ${mixins.flexColumn}
    margin-bottom: 1rem;
`;

const Button = styled.button`
    height: 2rem;
    width: 40%;
    margin-left: auto;
    border-radius: 20px;
`;

const MarginLabel = styled.label`
    margin-bottom: 1rem;
`;

const EmailHolder = styled.input`
    border-radius: 20px;
    height: 2rem;
    padding: 1rem 1rem;
`;
const MessageHolder = styled.textarea`
    border-radius: 20px;
    padding: 1rem 1rem;
`;
