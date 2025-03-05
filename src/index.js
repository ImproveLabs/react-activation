import AliveScope from './core/AliveScope'
import { withActivation, useActivate, useUnactivate } from './core/lifecycles'
import KeepAlive from './core/KeepAlive'
import {
  fixContext,
  autoFixContext,
} from './core/Bridge/Context'
import withAliveScope, { useAliveController } from './core/withAliveScope'

export default KeepAlive
export {
  KeepAlive,
  AliveScope,
  withActivation,
  fixContext,
  autoFixContext,
  useActivate,
  useUnactivate,
  withAliveScope,
  useAliveController,
}
