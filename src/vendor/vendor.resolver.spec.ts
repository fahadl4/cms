import { Test, TestingModule } from '@nestjs/testing';
import { VendorResolver } from './vendor.resolver';
import { VendorService } from './vendor.service';

describe('VendorResolver', () => {
  let resolver: VendorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendorResolver, VendorService],
    }).compile();

    resolver = module.get<VendorResolver>(VendorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
