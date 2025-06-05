import { Agent } from './Agent';

export class AgentManager {
  agents: Agent[] = [];

  register(agent: Agent) {
    this.agents.push(agent);
  }
}
