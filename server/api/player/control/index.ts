import type { DefineMethods } from 'aspida';
import type { UserId } from '../../../commonTypesWithClient/branded';
import type { PlayerModel } from '../../../commonTypesWithClient/models';
import type { MoveDirection } from '../../../usecase/playerUsecase';
export type Methods = DefineMethods<{
  get: {
    query: {
      userid: string;
    };
    resBody: PlayerModel | null;
  };
  post: {
    reqBody: {
      MoveDirection: MoveDirection;
      userId: UserId;
    };
    resBody: PlayerModel | null;
  };
}>;
