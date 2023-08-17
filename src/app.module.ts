import { Module } from '@nestjs/common';
import { ComputerModule } from './computer/computer.module';
import { DiskModule } from './disk/disk.module';
import { PowersupplyModule } from './powersupply/powersupply.module';
import { CpuModule } from './cpu/cpu.module';

@Module({
  imports: [ComputerModule, DiskModule, PowersupplyModule, CpuModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
