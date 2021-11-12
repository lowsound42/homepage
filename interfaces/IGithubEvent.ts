import IActor from "./IActor";
import IPayload from "./IPayload";
   
interface IGithubEvent {
    actor: IActor;
    created_at: string;
    id: string;
    payload: IPayload;
    public: boolean;
    repo: { id: number; name: string; url: string };
    type: string;
}

export default IGithubEvent