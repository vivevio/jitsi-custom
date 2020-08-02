//
//  ExternalAPI.h
//  JitsiMeet
//
//  Created by Vive Vio Permana on 02/08/20.
//  Copyright © 2020 Jitsi. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

#import "JitsiMeetView+Private.h"

@interface ExternalAPI : RCTEventEmitter<RCTBridgeModule>
- (void)sendCommand:(NSString *)eventName;
@end

