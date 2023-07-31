import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { mixinJsonModule } from "./mixin-json/mixin-json.module";
import { universitiesModule } from "./universities/universities.module";

@Module({
  imports: [
    universitiesModule,
    mixinJsonModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'files'),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
