import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthGuard implements CanActivate {
   constructor(
      private readonly authService: AuthService,
      private readonly usersService: UsersService
   ) { }

   async canActivate(context: ExecutionContext) {
      const req = context.switchToHttp().getRequest();
      const { authorization } = req.headers;

      try {
         const token = authorization?.split(' ')[1];
         const data = this.authService.checkToken(token);
         const user = await this.usersService.findUserById(Number(data.sub));

         req.user = user;
      } catch (error) {
         throw new UnauthorizedException();
      }
      return true;
   }

}