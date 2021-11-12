    interface ICommits {
        author: { email: string; name: string };
        distinct: boolean;
        message: string;
        sha: string;
        url: string;
    }

    export default ICommits

  
