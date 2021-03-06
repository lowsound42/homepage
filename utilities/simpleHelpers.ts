const extractGithubUrl = (inputUrl: string) => {
    let splitBySlash = inputUrl.split('/');
    const firstParam = splitBySlash.at(-2);
    const secondParam = splitBySlash.at(-1);
    const endOfUrl = `${firstParam}/${secondParam}`;
    return endOfUrl;
};

const helpers = { extractGithubUrl };

export default helpers;
