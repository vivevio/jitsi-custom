
@protocol ExternalAPIDelegate <NSObject>

@optional

- (void)sendCommand:(NSString *)eventName

@end
