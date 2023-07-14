import { ExecutionContext, NotFoundException, createParamDecorator } from "@nestjs/common";

export const UserRequest = createParamDecorator((data: string, context: ExecutionContext) => {
   const req = context.switchToHttp().getRequest();

   if (!req.user) throw new NotFoundException('User not found');

   return req.user;
});