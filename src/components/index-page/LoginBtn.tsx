interface LoginBtn {
    src: string;
    alt: string;
}

export default function LoginBtn(props: LoginBtn) {
    return <img src={props.src} alt={props.alt} style={{ width: '16%', height: '80%', marginTop: '70px' }}></img>;
}
