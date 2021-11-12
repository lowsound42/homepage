 import ICommits from './ICommits'
 
 interface IPayload {
  before?: string;
  commits?: ICommits[];
  push_id?: number;
  size?: number;
  distinct_size?: number;
  ref?: string;
  head?: string;
  action?: string;
}

export default IPayload